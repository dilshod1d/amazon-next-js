import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, image, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            category={category}
          />
        ))}
      <img className='md:col-span-full' src='http://links.papareact.com/dyz' />
      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, image, category }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              image={image}
              category={category}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, image, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            category={category}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
