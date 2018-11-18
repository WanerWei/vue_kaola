import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'

import BScroll from 'better-scroll'
import http from 'utils/http'
import _ from 'lodash'

export const scroll = ({
    el,
    data,
    idsList,
    url,
    vm
}) => {

    let bScroll = new BScroll(el,{
        probeType: 1,
        click: true,
        // 上拉到 50 
        pullUpLoad: {
            threshold: 50
        },
        cancelable: false,
        eventPassthrough: 'horizontal'
    })

    if(!!data) {

        // 请求页数初始化
        let pageNo = 0
    
        // 监测 上拉
        bScroll.on('pullingUp', async () => {
            
            // 控制请求次数
            if(pageNo >=3 ){
                // 提示信息
                Toast({
                    message: '别拉了，我也是有底线哒 ^_^',
                    position: 'bottom',
                    duration: 3000
                });
                return
            }
            
            // 加载提示
            Indicator.open({
                text: '玩命加载中...',
                spinnerType: 'fading-circle'
            })

            // 可请求次数
            if(pageNo < idsList.length) {
                let result = (await http({
                    url,
                    method: 'get',
                    params: {
                        goodsIds : idsList[pageNo].join(',')
                    }
                })).data
    
                // 更新 newGoods 列表
                data.push(...result)
    
                // 下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM
                vm.$nextTick(() => {
                    // bScroll更新高度
                    bScroll.refresh()
                    pageNo++
    
                    // 告诉better-scroll, 可以进行下次滑动了
                    bScroll.finishPullUp()
                })
            }
            if ( pageNo == idsList ) {
          
                // 告诉better-scroll, 可以进行下次滑动了
                bScroll.finishPullUp()
            }

            Indicator.close()
        })
    }

}