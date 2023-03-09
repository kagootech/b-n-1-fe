import { Link, useParams } from "react-router-dom";

function View() {
  const { state } = useParams();

  const product = {
    name: "Dadar Coklat - Za Choco",
    price: 10000,
    store_name: "Zacky's Food",
    description:
      "Produk dibuat oleh tangan-tangan yang berkualitas. Dengan tingkat kepuasan 100%",
  };

  return (
    <>
      <div className="bg-white pb-10">
        <div className="fixed">
          <div className="bg-white rounded-full shadow px-3 py-2 ml-4 mt-4">
            <Link to="/">
              <h6 className="text-lg">
                <i className="fa-solid fa-arrow-left"></i>
              </h6>
            </Link>
          </div>
        </div>

        <div
          className="bg-yellow-300"
          style={
            {
              // minHeight: "300px",
            }
          }
        >
          <img src="/products/fs.jpg" className="w-full" alt="" />
        </div>
        <div
          className="-mt-6 px-4 py-6 bg-white border"
          style={{
            borderTopRightRadius: "27px",
            borderTopLeftRadius: "27px",
            minHeight: "500px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h6 className="font-medium text-xl mt-2">{product.name}</h6>
          <h3 className="text-xl text-right">
            <small className="text-yellow-400">Rp</small> <b>{product.price}</b>
          </h3>

          <div className="mt-4 border rounded-lg px-4 py-2">
            <i class="fa-solid fa-store mr-2 text-yellow-400"></i>
            {product.store_name}
          </div>

          <div className="mt-6">
            <h6 className="font-bold text-lg">Detail</h6>
            <p className="mt-4 text-gray-400">{product.description}</p>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-0 left-0 w-full"
        style={{
          zIndex: 2,
        }}
      >
        <div
          className="flex mx-auto px-4 py-3 border-t bg-white"
          style={{
            maxWidth: "400px",
          }}
        >
          <Link to={"/product/" + state + "/checkout"} className="w-full">
            <button className="bg-yellow-400 text-white rounded-lg py-2 text-center w-full">
              Beli bang
            </button>
          </Link>
          <Link to={"/pesenan"}>
            <button className="rounded-lg border border-gray-300 py-2 px-3 ml-2">
              {/* <i className="fa-solid fa-cart"></i> */}
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default View;
