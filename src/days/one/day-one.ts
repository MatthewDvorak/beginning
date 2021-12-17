import Router from '@koa/router';
import Joi from 'joi';

const partOne = (depths: number[]): number => {
    let numberOfIncreasedDepths = 0;
    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i - 1]) {
            numberOfIncreasedDepths++;
        }
    }
    return numberOfIncreasedDepths;
}

// const partTwo = (): number => {
//
// }

// request validator
const request = Joi.object({
    input: Joi.array().items(Joi.number())
});

const router = new Router({
    prefix: '/day-one'
});

router.post('/part-one', (ctx, next) => {
    const result = request.validate(ctx.request.body);
    if(result.error != undefined) {
        ctx.status = 400;
        ctx.body = 'unexpected payload';
        return;
    }

    const depths: number[] = ctx.request.body?.input;
    ctx.status = 200;
    ctx.body = partOne(depths);
    return;
});

router.post('part-two', (ctx, next) => {

});

export default router;
