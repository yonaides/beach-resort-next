import "../styles/App.css";
import Layout from "../components/Layout";
import { ToastProvider } from "react-toast-notifications";
import { RoomProvider } from "../context/RoomContext";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider autoDismiss>
      <RoomProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RoomProvider>
    </ToastProvider>
  );
}

export default MyApp;
