import React, { useState, useEffect } from 'react';
import Card from '../../components/cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Category = "Chest" | "Back" | "Abs" | "Legs" | "Others";
interface Menu {
  id: string;
  title?: string;
  describe?: string;
  image?: string;
  imageAlt?: string;
  onClick?: () => void;
  className?: string;
  hoverable?: boolean;
  url?: string;
  category?: Category;
  variant?: 'bordered' | 'elevated';
}

const Home = () => {
  const [data, setData] = useState<Menu[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('api/menus/');
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load exercises');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []); 

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-green-50 to-green-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/40" />
        </div>
        
        <div className="relative px-6 py-24 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Welcome to{' '}
              <span className="block text-5xl sm:text-6xl md:text-7xl mt-2">
                HowToFit
                <span className="text-red-500 inline-block transform hover:scale-110 transition-transform duration-200">.</span>
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Discover the perfect workout routines tailored just for you
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-64" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((item) => (
              <Link 
                key={item.id}
                to={`${item.id}`}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <Card
                  id={item.id}
                  title={item.title}
                  describe={item.describe}
                  image={item.image}
                  variant={item.variant || 'elevated'}
                />
              </Link>
            ))}
          </div>
        )}
      </section>
{/* 
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Chest', 'Back', 'Abs', 'Legs', 'Others'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-700 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Home;