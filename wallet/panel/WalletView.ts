/// <reference path="../main.ts" />
/// <reference path="./ViewBase.ts" />

namespace BlackCat {
    // 导入&创建钱包视图
    export class WalletView extends ViewBase {

        private divCreate: HTMLDivElement;

        create() {
            // console.log('[Bla Cat]', '[WalletView] 创建 ...")

            this.div = this.objCreate("div") as HTMLDivElement;
            this.div.classList.add("pc_wallet")

            //标题
            var walletTitle = this.objCreate("div")
            walletTitle.classList.add("pc_wallet_title")
            this.ObjAppend(this.div, walletTitle)

            var walletTitleH1 = this.objCreate("h1")
            walletTitleH1.classList.add("iconfont","icon-blacat")
            // walletTitleH1.innerText = Main.platName
            this.ObjAppend(walletTitle, walletTitleH1)

            var walletTitleP = this.objCreate("p")
            walletTitleP.innerText = Main.langMgr.get("walletView_info") // "做不一样，但好玩的游戏！"
            this.ObjAppend(walletTitle, walletTitleP)




            var createWallet = this.objCreate("button");
            createWallet.textContent = "创建钱包"
            createWallet.classList.add("pc_createWallet")
            createWallet.onclick = () => {
                Main.viewMgr.change("WalletCreateView")
            }
            this.ObjAppend(this.div, createWallet)

            var iCreateWallet=this.objCreate("i")
            iCreateWallet.classList.add("iconfont","icon-chuangjian1")
            this.ObjAppend(createWallet, iCreateWallet)


            var importWallet = this.objCreate("button");
            importWallet.textContent = "导入钱包"
            importWallet.classList.add("pc_importWallet")

            importWallet.onclick = () => {
                Main.viewMgr.change("WalletImportView")
            }
            this.ObjAppend(this.div, importWallet)

            var iImportWallet=this.objCreate("i")
            iImportWallet.classList.add("iconfont","icon-daoru1")
            this.ObjAppend(importWallet, iImportWallet)
        }

    }
}