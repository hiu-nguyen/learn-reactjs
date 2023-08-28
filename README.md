# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

###

- dùng porp khi giá trị đó không thay đổi và nhận được từ components cha xuống components con, không thay đổi được giá trị của props khi đã chuyền đi, muốn thay đôi thì phải thay đổi từ components cha, chuyền xuống có j thì render ra cái đấy
- dùng state khi giá trị thay đổi theo thời gian, của bản thân components đó tạo ra, tự động quản lý và xử lý, có thể thay đổi được

###

-nên dùng PureComponents vì PureComponents trước khi render ra sẽ so sánh với các props và state trước và sau, nếu khác nhau thì render ra còn giống nhau thì sẽ ko rerender lại

###

- Mounting(Tạo ra)
- Updapting(Thay đổi)
- Unmounting(Hủy bỏ)

### lifecycle

- constructor dùng để khai báo thuộc tính hoặc state
- componentDidMount khởi tạo dữ liệu cho components(gọi API, biến đổi dữ liệu, cập nhật state), gửi tracking page view(GA, FacebookPixel, ...)
- componentsWillUnmount hay được dùng để clear timeout hoặc interval, reset dữ liệu trên redux
- componentsDidUpdate (ko nên sử dụng setstate trong DidUpdate)

### rounter-dom

- useHistory() dùng để di chuyển qua trang khác, dùng đề navigate
- useLocation() dùng để trả về các Location object hiện tại, thường được xử lý với URL form
- useParams() được dùng khi muốn xử lý path params
- useRouteMatch() khi muốn làm nested routing
