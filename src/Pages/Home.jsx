import { Link } from "react-router-dom";

function Home() {
  const products = [
    {
      state: "kulpi-shaka",
      name: "Kulpi",
      store_name: "Shaka food",
      price: 10000,
    },
    {
      state: "roreng-dita",
      name: "Roti Goreng - Roreng",
      store_name: "Dita's food",
      price: 5000,
    },
    {
      state: "kulpi-shaka",
      name: "Kulpi",
      store_name: "Shaka food",
      price: 10000,
    },
    {
      state: "roreng-dita",
      name: "Roti Goreng - Roreng",
      store_name: "Dita's food",
      price: 5000,
    },
    {
      state: "kulpi-shaka",
      name: "Kulpi",
      store_name: "Shaka food",
      price: 10000,
    },
    {
      state: "roreng-dita",
      name: "Roti Goreng - Roreng",
      store_name: "Dita's food",
      price: 5000,
    },
  ];

  return (
    <>
      <div
        className="bg-yellow-400 px-4 pt-4 pb-7"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="flex justify-between items-center">
          <h6 className="text-lg font-medium">Helo, Taruna/i</h6>
          <div>
            <Link to="/profile">
              <span className="bg-yellow-500 px-3 py-2 rounded-full">
                <i class="fa-solid fa-user"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="-mt-5 px-4">
        <div className="shadow-sm rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Cari jualan apa bang?"
            className="outline-none text-lg w-full bg-white px-5 py-2"
          />
        </div>
      </div>

      <div className="home-content pt-10">
        <h5 className="text-center font-medium text-2xl">
          Pusat jualannya anak SMKN 1
        </h5>
        <h6 className="text-center text-gray-400 px-7 mt-2">
          Platform jualan produk untuk anak kesayangan bu Ottih.
        </h6>

        <div className="px-4 my-10">
          <div className="grid grid-cols-2 gap-5">
            {products.map((product) => {
              return (
                <Link to={"/product/" + product.state}>
                  <div className="bg-white shadow-sm rounded overflow-hidden">
                    <div
                      className="img bg-blue-300"
                      style={{ height: "140px" }}
                    ></div>
                    <div className="px-4 py-2">
                      <h6>{product.name}</h6>
                      <div className="flex jusfify-between">
                        <div>
                          <h5 className="text-yellow-500 font-bold">
                            Rp {product.price}
                          </h5>
                          <h6 className="text-sm text-gray-500">
                            <i class="fa-solid fa-store mr-2"></i>
                            {product.store_name}
                          </h6>
                        </div>
                        {/* <div className="text-right">
                          <button className="bg-yellow-400 px-3 rounded-full text-white font-bold text-xl">
                            +
                          </button>
                        </div> */}
                        {/* <i class="fa-regular fa-cart-plus"></i> */}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
