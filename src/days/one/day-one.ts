import Router from '@koa/router';
import Joi from 'joi';

const partTwo = (depths: number[]): number => {
    let numberOfIncreasedDepths = 0;
    for (let i = 0; i < depths.length - 3; i++) {
        const previousWindow = depths[i] + depths[i + 1] + depths [i + 2];
        const currentWindow = depths[i + 1] + depths[i + 2] + depths [i + 3];
        if (currentWindow > previousWindow) {
            numberOfIncreasedDepths++;
        }
    }
    console.log(`${numberOfIncreasedDepths} Depth Increases`)
    return numberOfIncreasedDepths;
}

const partOne = (depths: number[]): number => {
    let numberOfIncreasedDepths = 0;
    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i - 1]) {
            numberOfIncreasedDepths++;
        }
    }
    return numberOfIncreasedDepths;
}

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

router.post('/part-two', (ctx, next) => {
    const result = request.validate(ctx.request.body);
    if(result.error != undefined) {
        ctx.status = 400;
        ctx.body = 'unexpected payload';
        return;
    }

    const depths: number[] = ctx.request.body?.input;
    ctx.status = 200;
    ctx.body = partTwo(depths);
    return;
});

export default router;
