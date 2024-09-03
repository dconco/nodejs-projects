import {
	createServer,
	IncomingMessage,
	ServerResponse,
	Server
} from 'node:http'
import url, { URLSearchParams } from 'node:url'
import Listen from './utils/Server'

/**
 * CREATE NEW SERVER
 */
const server: Server = createServer(
	(req: IncomingMessage, res: ServerResponse) => {
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
	}
)

Listen(server)
