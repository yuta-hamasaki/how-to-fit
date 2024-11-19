import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState<Menu>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/menus/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch exercise data');
        }

        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);


  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/menus/${id}`, {
        method: "DELETE",
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 max-w-4xl py-8 space-y-6">
        <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-2/3 h-8 bg-gray-200 rounded-md animate-pulse" />
        <div className="w-full h-24 bg-gray-200 rounded-md animate-pulse" />
        <div className="w-full h-80 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">エラーが発生しました</h3>
              <p className="mt-2 text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {data?.image && (
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={data.image}
              alt={data.imageAlt || data.title || 'Exercise demonstration'}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {data?.title}
            </h1>
            {data?.category && (
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                {data.category}
              </span>
            )}
          </div>

          {data?.describe && (
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.describe}
            </p>
          )}

          {data?.url && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${data.url}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${data.title || 'Exercise'} video demonstration`}
              />
            </div>
          )}
        </div>
      </div>
      <button 
      className="bg-red-500 text-white py-3 px-6 rounded-md"
    onClick={handleDelete}
    >Delete</button>
    </div>
  );
};

export default Detail;