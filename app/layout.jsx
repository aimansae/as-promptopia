import "@styles/global.css";

// change metadata

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI prompts",
};
const RouteLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RouteLayout;
