import { useRouter } from "next/router";

function ProductItem() {
  const {
    query: { id, idPost, title, suggestions },
  } = useRouter();
  return (
    <div>I received this params: {JSON.stringify({ id, idPost, title, suggestions })}</div>
  );
}

export default ProductItem;
