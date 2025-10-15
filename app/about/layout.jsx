import Footer from "@/components/Footer";

export const metadata = {
  title: "Khalid | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
