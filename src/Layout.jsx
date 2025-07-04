function Layout({ children }) {
  return (
    <div className="w-screen h-full overflow-hidden m-0 p-4 pb-0 theme-bg">
      {children}
    </div>
  );
}

export default Layout;