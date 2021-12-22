import Router from '@koa/router';
import Joi from 'joi';

const pilotingTheSub = (propulsion: string[]): number => {
    let hp = 0;
    let depth = 0;
    let aim = 0;

    for (const command of propulsion){
        const direction = command.split(' ');
        switch (direction[0]){
            case 'forward':
                hp += +direction[1];
                depth += aim * +direction[1];
                break;
            case 'down':
                aim += +direction[1];
                break;
            case 'up':
                aim -= +direction[1];
                break;
            default:
                console.log("Matt you big dumb. Try again.")
        }
    }
    console.log(`Your position is ${hp * depth}`);
    return hp * depth;

}
// request validator
const request = Joi.object({
    input: Joi.array().items(Joi.string())
});

const router = new Router({
    prefix: '/day-two'
});

router.post('/part-two', (ctx, next) => {
    const result = request.validate(ctx.request.body);
    if(result.error != undefined) {
        ctx.status = 400;
        ctx.body = 'unexpected payload';
        return;
    }

    const mattIsConfusion: string[] = ctx.request.body?.input;
    ctx.status = 200;
    ctx.body = pilotingTheSub(mattIsConfusion);
    return;
});

export default router;
