'use client'

import React, { useState, useEffect } from 'react'
import { ref, onValue, push, remove } from 'firebase/database'
import { database } from './../../../config/firebase-config'

type Product = {
  id: string
  name: string
  price: number
}

type Category = {
  id: string
  name: string
  products: Product[]
}

interface ComponentProps {
  isAdmin?: boolean
}

export default function CategoryProducts({ isAdmin = true }: ComponentProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [newProduct, setNewProduct] = useState({ name: '', price: 0 })

  useEffect(() => {
    const categoriesRef = ref(database, 'categories')
    const unsubscribe = onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const categoriesArray = Object.entries(data).map(([id, category]: [string, any]) => ({
          id,
          ...category,
          products: category.products ? Object.entries(category.products).map(([productId, product]: [string, any]) => ({
            id: productId,
            ...product
          })) : []
        }))
        setCategories(categoriesArray)
        if (!selectedCategory && categoriesArray.length > 0) {
          setSelectedCategory(categoriesArray[0].id)
        }
      }
    })

    return () => unsubscribe()
  }, [])

  const addProduct = (categoryId: string) => {
    if (newProduct.name && newProduct.price > 0) {
      const productRef = ref(database, `categories/${categoryId}/products`)
      push(productRef, newProduct)
      setNewProduct({ name: '', price: 0 })
    }
  }

  const removeProduct = (categoryId: string, productId: string) => {
    const productRef = ref(database, `categories/${categoryId}/products/${productId}`)
    remove(productRef)
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded ${selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.find(cat => cat.id === selectedCategory)?.products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              {isAdmin && (
                <button
                  onClick={() => removeProduct(selectedCategory, product.id)}
                  className="mt-2 px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {isAdmin && selectedCategory && (
        <div className="mt-8 p-4 border rounded">
          <h3 className="text-xl font-bold mb-4">Add New Product</h3>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border p-2 mr-2"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price || ''}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })}
            className="border p-2 mr-2"
          />
          <button
            onClick={() => addProduct(selectedCategory)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Product
          </button>
        </div>
      )}
    </div>
  )
}