import { createElement } from "complate-stream";

export default function Layout({ title }, ...children) {
	return (<html>
		<head>
			<meta charset="utf-8" />
			<title>{title}</title>
		</head>

		<body>
			{children}
		</body>
	</html>);
}
