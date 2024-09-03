import { createServer, IncomingMessage, ServerResponse } from 'node:http'
import url, { URLSearchParams } from 'node:url'

const host: string = 'localhost'
const port: number = 3000

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
	let uri = url.parse(req?.url ?? '/')
	let uriParam = new URLSearchParams(uri?.query ?? '/')
	let uriQuery = uriParam.get('username')

	res.setHeader('Content-Type', 'text/html')

	switch (uri.pathname) {
		case '/index':
			res.statusCode = 200
			res.write('<h2>Index Page</h2>')
			break

		default:
			res.statusCode = 404
			res.write('<h2>404 | NOT FOUND</h2>')
			break
	}

	res.end()
})

server.listen(port, host, () =>
	console.log(`Started Server at port ${host}:${port}`)
)
