import React, { useState } from 'react';
import { Car, ShieldCheck, Gauge, Fuel, Calendar, ChevronRight } from 'lucide-react';

const cars = [
  {
    id: 1,
    model: "Mercedes-Benz E 200",
    year: 2022,
    price: "2.450.000 TL",
    km: "15.000",
    fuel: "Benzin",
    transmission: "Otomatik",
    expert: "Tramer Kaydı Yok, Boyasız"
  },
  {
    id: 2,
    model: "BMW 520i",
    year: 2021,
    price: "2.100.000 TL",
    km: "32.000",
    fuel: "Benzin",
    transmission: "Otomatik",
    expert: "Sol Arka Çamurluk Boyalı"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b border-gray-200 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">PREMIUM MOTORS</h1>
          <div className="space-x-6 text-sm font-medium text-gray-600">
            <a href="#stok" className="hover:text-black">Stok</a>
            <a href="#iletisim" className="hover:text-black">İletişim</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 py-12">
        <header className="mb-16">
          <h2 className="text-4xl font-light mb-4">Seçkin Araç Koleksiyonumuz</h2>
          <p className="text-gray-500">Ekspertiz garantili, özenle seçilmiş ikinci el araçlar.</p>
        </header>

        <div id="stok" className="grid md:grid-cols-2 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{car.model}</h3>
                <span className="text-lg font-bold">{car.price}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2"><Calendar size={16} /> {car.year} Model</div>
                <div className="flex items-center gap-2"><Gauge size={16} /> {car.km} KM</div>
                <div className="flex items-center gap-2"><Fuel size={16} /> {car.fuel}</div>
                <div className="flex items-center gap-2"><Car size={16} /> {car.transmission}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-100 flex items-center gap-2 text-sm">
                <ShieldCheck size={18} className="text-green-600" />
                <span className="font-medium">Ekspertiz:</span> {car.expert}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer id="iletisim" className="bg-gray-900 text-white p-12 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl mb-4">İletişim</h3>
          <p className="text-gray-400">Adres: Otomotiv Plaza No:1, İstanbul</p>
          <p className="text-gray-400">Telefon: 0212 000 00 00</p>
        </div>
      </footer>
    </div>
  );
}