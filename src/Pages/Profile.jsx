import { Link } from "react-router-dom";

function Profile() {
  const user = {
    name: "Samsul Arif",
  };
  return (
    <>
      <div className="bg-white">
        <div
          className="px-4 py-4"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <Link to="/">
            <i className="fa-solid fa-arrow-left mr-3"></i>
          </Link>
          Profile
        </div>
        <div className="px-4 py-7">
          <div className="flex items-center">
            <div
              className="bg-blue-300 rounded-full"
              style={{
                width: "60px",
                height: "60px",
              }}
            ></div>
            <div className="pl-4">
              <h5 className="text-xl">{user.name}</h5>
              <h6 className="text-gray-400 text-sm">
                SMKN 1 Kabupaten Tangerang
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5">
        <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow">
          <button className="p-3 bg-yellow-400 text-center">Informasi</button>
          <button className="p-3 bg-white text-center">Produk</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
