/// <reference path="../main.ts" />
/// <reference path="./ViewBase.ts" />

namespace BlackCat {
    // 交易数量视图
    export class ViewTransCount extends ViewBase {

        inputCount: HTMLInputElement

        start() {
            super.start()
            this.inputCount.focus()
        }

        create() {
            this.div = this.objCreate("div") as HTMLDivElement
            this.div.classList.add("pc_popup")
            //弹窗的框
            var popupbox = this.objCreate('div')
            popupbox.classList.add("pc_popupbox")
            this.ObjAppend(this.div, popupbox)

            // 弹窗的标题
            var popupTitle = this.objCreate('div')
            popupTitle.classList.add("pc_popup_title")
            popupTitle.innerText = Main.langMgr.get("pay_transCount_count") // "数量"
            this.ObjAppend(popupbox, popupTitle)

            // 类型
            var divtransfertype = this.objCreate("div")
            divtransfertype.classList.add("pc_transfertype", "iconfont")
            divtransfertype.id="pc_transfertype"
            divtransfertype.style.textAlign = "center"
            divtransfertype.style.fontSize = "20px"
            divtransfertype.style.marginTop = "20px"
            this.ObjAppend(popupbox, divtransfertype)

            this.inputCount = this.objCreate("input") as HTMLInputElement
            this.inputCount.type = "text"
            this.inputCount.style.marginTop = "0"
            this.inputCount.placeholder = Main.langMgr.get("pay_transCount_inputCount") // "请输入数量"
            this.ObjAppend(popupbox, this.inputCount)


            // 弹窗按钮外框
            var popupbutbox = this.objCreate('div')
            popupbutbox.classList.add("pc_popupbutbox")
            this.ObjAppend(popupbox, popupbutbox)

            // 取消
            var popupClose = this.objCreate('button')
            popupClose.classList.add("pc_cancel")
            popupClose.textContent = Main.langMgr.get("cancel") // "取消"
            popupClose.onclick = () => {
                Main.viewMgr.viewTransCount.div.classList.add("pc_fadeindown")
                this.remove(300)
            }
            this.ObjAppend(popupbutbox, popupClose)



            var confirmObj = this.objCreate("button")
            confirmObj.textContent = Main.langMgr.get("ok") // "确认"
            confirmObj.onclick = () => {
                this.doConfirm()
            }
            this.ObjAppend(popupbutbox, confirmObj)
        }

        toRefer() {
            if (ViewTransCount.refer) {
                Main.viewMgr.change(ViewTransCount.refer);
                ViewTransCount.refer = null;
            }
        }


        private doConfirm() {
            if (!this.inputCount.value) {
                this.inputCount.focus()
                return
            }

            this.remove()
            ViewTransCount.callback();
            ViewTransCount.callback = null;
        }
    }
}