import { useSearchParams } from 'react-router-dom';
function Contact(props: any) {
  const products = [
    {
      id: 1,
      product_name: 'iPhone',
      price: 1000,
    },
    {
      id: 2,
      product_name: 'iPad',
      price: 500,
    },
    {
      id: 3,
      product_name: 'iPod',
      price: 40,
    },
    {
      id: 4,
      product_name: 'MacBook',
      price: 2000,
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get('product_name') || '';
  console.log(searchParams.get('product_name'));

  const handleChange = (event: any) => {
    const product_name = event.target.value;
    if (product_name) {
      setSearchParams({ product_name: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  const searchProducts = () => {
    return products.filter((product) => {
      return product.product_name.includes(searchParams.get('product_name') || '');
    });
  };

  return (
    <div>
      <h2>Contact</h2>
      <input type='text' onChange={handleChange} value={paramsValue} />
      <ul>
        {searchProducts().map((product) => (
          <li key={product.id}>
            {product.product_name}/{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
