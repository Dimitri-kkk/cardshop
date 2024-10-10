import { Wallet, Truck, Gift } from 'lucide-react'

const features = [
  { icon: Wallet, text: 'დახვეწილი' },
  { icon: Truck, text: 'ხარისხიანი' },
  { icon: Gift, text: 'განსხვავებული' },
]

export default function FeatureBar() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 relative">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <feature.icon className="w-12 h-12 text-gray-600 mr-3" />
              <span className="text-xl font-extrabold text-gray-700">{feature.text}</span>
              {index < features.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 w-px bg-gray-300 h-12" 
                     style={{
                       left: `calc(${(index + 1) * (100 / features.length)}% - 1px)`,
                     }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}