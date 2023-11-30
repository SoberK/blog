# react-router 

## 嵌套路由

``` tsx
//router
   <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>


      ///Layout
     function Layout() {
        return (
            <div>
            <AuthStatus />

            <ul>
                <li>
                <Link to="/">Public Page</Link>
                </li>
                <li>
                <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            <Outlet />  //子路由
            </div>
        );
        }

        //main.js
        <BrowserRouter>
            <[客户端路由]/>  
        </BrowserRouter>


```

## 客户端路由

+ hashRouter
+ browserRouter
+ 基本重定向 
  + redirect  react-router-dom
  + 

``` jsx
//router.js

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username };
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: PublicPage,
      },
      {
        path: "login",
        action: loginAction,
        loader: loginLoader,
        Component: LoginPage,
      },
      {
        path: "protected",
        loader: protectedLoader,
        Component: ProtectedPage,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/");
    },
  },
]);

// main.js
 <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />

```
