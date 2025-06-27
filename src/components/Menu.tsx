import React from 'react';

const Menu = () => {
  const menuItems = {
    appetizers: [
      {
        name: 'Antipasto Vicolo',
        description: 'Seleção de frios, queijos e azeitonas italianas',
        price: 'R$ 45,00',
        image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Bruschetta Tradicional',
        description: 'Pão italiano com tomate, manjericão e azeite extra virgem',
        price: 'R$ 28,00',
        image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Fatias finas de carne bovina com rúcula e parmesão',
        price: 'R$ 38,00',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    mains: [
      {
        name: 'Spaghetti alla Carbonara',
        description: 'Massa fresca com pancetta, ovos, queijo pecorino e pimenta',
        price: 'R$ 52,00',
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Risotto ai Porcini',
        description: 'Risotto cremoso com cogumelos porcini e parmesão',
        price: 'R$ 58,00',
        image: 'https://images.pexels.com/photos/1340648/pexels-photo-1340648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Osso Buco alla Milanese',
        description: 'Osso buco braseado com risotto açafrão',
        price: 'R$ 78,00',
        image: 'https://images.pexels.com/photos/1571847/pexels-photo-1571847.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Pizza Margherita',
        description: 'Massa artesanal, molho de tomate, mussarela e manjericão',
        price: 'R$ 42,00',
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu da Casa',
        description: 'Sobremesa tradicional com café espresso e mascarpone',
        price: 'R$ 24,00',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Panna Cotta',
        description: 'Sobremesa cremosa com calda de frutas vermelhas',
        price: 'R$ 22,00',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Gelato Siciliano',
        description: 'Sorvete artesanal de pistache e chocolate',
        price: 'R$ 18,00',
        image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ]
  };

  const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                <span className="text-yellow-600 font-bold text-lg">{item.price}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sabores autênticos da Itália preparados com ingredientes frescos e receitas tradicionais
          </p>
        </div>

        <MenuSection title="Antipasti" items={menuItems.appetizers} />
        <MenuSection title="Primi e Secondi" items={menuItems.mains} />
        <MenuSection title="Dolci" items={menuItems.desserts} />

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Confira nosso cardápio completo com vinhos selecionados e pratos sazonais
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
            Cardápio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;