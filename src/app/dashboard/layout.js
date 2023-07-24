import SideBar from "@/components/shared/SideBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">{children}</div>
    </div>
  );
}
