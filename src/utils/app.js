

import templateFn from "./templateFn.js";
import { ElFormFn, ElFormItemFn, ElInputFn } from "./template.js";
const content = templateFn(
    ElFormFn({
        children: ElFormItemFn({
            label: '123',
            children: ElInputFn({
                key: 'name',
                placeholder: '11231245125'
            })
        })
    })
) 