interface Config{
    port?: number
}

const config: Config = {
    port: 5000
}

const port: number = config.port!
