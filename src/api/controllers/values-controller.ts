import { Request, Response } from 'express'

class ValuesController {
    public getValue = async (req: Request, res: Response): Promise<void> => {
        res.send(['value 1', 'value 2'])
    }

    public getOneValue = async (req: Request, res: Response): Promise<void> => {
        const val = req.params.value

        res.send(val)
    }
}

export default new ValuesController()
