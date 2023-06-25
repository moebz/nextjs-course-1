import { useRouter } from "next/router";

function ProductItem() {
  const router = useRouter();
  return <div>This is the product page for the id: {router.query.id}</div>;
}

export default ProductItem;
