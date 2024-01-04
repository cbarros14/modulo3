import React, { useState } from 'react';
import ProductList from '../ProductList';

const Products = () => {
    const [ categoriaTab, setCategoriaTab ] = useState('Hamburguer');
  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
        {/* Menu Categoria */}
        <div className='flex items-center justify-center space-x-6'>
            <p className={categoriaTab == 'Hamburguer' ? "active-menu-tab bg-zinc-600" : "menu-tab"} onClick={() => setCategoriaTab('Hamburguer')}>Hamburguer</p>
            <p className={categoriaTab == 'Suco' ? "active-menu-tab bg-zinc-600" : "menu-tab"} onClick={() => setCategoriaTab('Suco')}>Suco</p>
            <p className={categoriaTab == 'Batata' ? "active-menu-tab bg-zinc-600" : "menu-tab"} onClick={() => setCategoriaTab('Batata')}>Batata</p>
            <p className={categoriaTab == 'Sobremesa' ? "active-menu-tab bg-zinc-600" : "menu-tab"} onClick={() => setCategoriaTab('Sobremesa')}>Sobremesa</p>
        </div>
        {/* Lista de produtos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
            <ProductList/>
            <ProductList/>
            <ProductList/>
            <ProductList/>
            <ProductList/>
            <ProductList/>
        </div>
    </section>
  )
}

export default Products;