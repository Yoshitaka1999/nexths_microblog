import Head from "next/head";
import { Children } from "react";

const name = "yoshi Code"
export const siteTitle = "Next.js blog";

function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <img src="/images/profile.png" />
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;