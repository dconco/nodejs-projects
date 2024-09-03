import { Server } from 'node:http'

/**
 * DEFINE THE SERVER PORT
 */
enum ServerListen {
	Host = 'localhost',
	Port = 3000
}

const Listen = (server: Server) => {
	/**
	 * LISTEN TO A NEW PORT
	 */
	server.listen(ServerListen.Port, ServerListen.Host, () =>
		console.log(
			`Started Server at port ${ServerListen.Host}:${ServerListen.Port}`
		)
	)
}

export default Listen
export { ServerListen }
