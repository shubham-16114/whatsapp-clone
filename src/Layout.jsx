
function Layout({ children }) {
  return (
    <div className="w-screen h-full m-0 p-4 overflow-hidden bg-gray-900 text-white">
      {children}
    </div>
  );
}

export default Layout;