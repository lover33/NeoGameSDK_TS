namespace BlackCat {
    // 视图管理器
    export class ViewMgr {

        views: any; // 所有在mainView打开过的界面

        iconView: IconView; // 最小化界面
        mainView: MainView; // 主界面

        viewWalletOpen: ViewWalletOpen; // 打开钱包
        viewTransCount: ViewTransCount; // 输入交易sgas数量
        viewTransConfirm: ViewTransConfirm; // 交易确认框
        viewTransConfirmGas: ViewTransConfirmGas; // Gas交易确认框
        viewAlert: ViewAlert;//提示
        viewConfirm: ViewConfirm;//确认
        viewToast: ViewToast;//自动消失
        viewLoading: ViewLoading;//Loading

        registerView: RegisterView; // 注册界面
        loginView: LoginView; // 登录界面
        forgetPasswordView: ForgetPasswordView; //忘记密码

        walletView: WalletView; // 钱包界面
        walletCreateView: WalletCreateView; // 创建钱包
        walletImportView: WalletImportView; // 导入钱包

        payView: PayView; // 我的钱包页
        payListDetailView: PayListDetailView; // 钱包记录详细
        payListMoreView: PayListMoreView; // 更多记录

        myInfoView: MyInfoView; // 我的信息
        modifyNameView: ModifyNameView; //修改昵称


        payWalletDetailView: PayWalletDetailView; // 钱包详情
        payReceivablesView: PayReceivablesView;//收款
        payTransferView: PayTransferView; // 转账


        constructor() {
            this.mainView = new MainView();
            this.mainView.start()

            this.views = {}
        }

        change(type: string) {
            switch (type) {
                // 打开钱包时输入密码界面
                case "ViewWalletOpen":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示打开钱包输入密码界面(' + type + ') ...')
                    if (!this.viewWalletOpen) {
                        this.viewWalletOpen = new ViewWalletOpen();
                        this.views[type] = this.viewWalletOpen;
                    }
                    this.viewWalletOpen.start()
                    break;
                // 输入sgas交易数量
                case "ViewTransCount":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示输入交易数量界面(' + type + ') ...')
                    if (!this.viewTransCount) {
                        this.viewTransCount = new ViewTransCount();
                        this.views[type] = this.viewTransCount
                    }
                    this.viewTransCount.start()
                    break;
                // 交易确认
                case "ViewTransConfirm":
                    console.log('[Bla Cat]', '[viewMgr]', '显示确认交易界面(' + type + ') ...')
                    if (!this.viewTransConfirm) {
                        this.viewTransConfirm = new ViewTransConfirm();
                        this.views[type] = this.viewTransConfirm
                    }
                    this.viewTransConfirm.start()
                    break;
                // 小图标
                case "IconView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示SDK图标(' + type + ') ...')
                    if (!this.iconView) {
                        this.iconView = new IconView();
                    }
                    this.iconView.start()
                    break;
                // 登录
                case "LoginView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示登录(' + type + ') ...')
                    if (!this.loginView) {
                        this.loginView = new LoginView();
                        this.views[type] = this.loginView
                    }
                    this.loginView.start();
                    break;
                // 绑定&导入钱包
                case "WalletView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示绑定&导入钱包(' + type + ') ...')
                    if (!this.walletView) {
                        this.walletView = new WalletView();
                        this.views[type] = this.walletView
                    }
                    this.walletView.start();
                    break;
                case "WalletCreateView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示新建钱包(' + type + ') ...')
                    if (!this.walletCreateView) {
                        this.walletCreateView = new WalletCreateView();
                        this.views[type] = this.walletCreateView
                    }
                    this.walletCreateView.start();
                    break;

                case "WalletImportView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示导入钱包(' + type + ') ...')
                    if (!this.walletImportView) {
                        this.walletImportView = new WalletImportView();
                        this.views[type] = this.walletImportView
                    }
                    this.walletImportView.start();
                    break;
                // 钱包页
                case "PayView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示钱包页(' + type + ') ...')
                    if (!this.payView) {
                        this.payView = new PayView();
                        this.views[type] = this.payView
                    }
                    this.payView.start();
                    break;
                case "PayListDetailView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示交易详情(' + type + ') ...')
                    if (!this.payListDetailView) {
                        this.payListDetailView = new PayListDetailView();
                        this.views[type] = this.payListDetailView
                    }
                    this.payListDetailView.start()
                    break;
                case "PayListMoreView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示更多记录(' + type + ') ...')
                    if (!this.payListMoreView) {
                        this.payListMoreView = new PayListMoreView();
                        this.views[type] = this.payListMoreView
                    }
                    this.payListMoreView.start()
                    break;
                case "MyInfoView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示我的信息(' + type + ') ...')
                    if (!this.myInfoView) {
                        this.myInfoView = new MyInfoView();
                        this.views[type] = this.myInfoView
                    }
                    this.myInfoView.start()
                    break;

                case "PayWalletDetailView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示钱包详情(' + type + ') ...')
                    if (!this.payWalletDetailView) {
                        this.payWalletDetailView = new PayWalletDetailView();
                        this.views[type] = this.payWalletDetailView
                    }
                    this.payWalletDetailView.start()
                    break;
                case "PayReceivablesView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示收款(' + type + ') ...')
                    if (!this.payReceivablesView) {
                        this.payReceivablesView = new PayReceivablesView();
                        this.views[type] = this.payReceivablesView
                    }
                    this.payReceivablesView.start()
                    break;
                case "PayTransferView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示转账(' + type + ') ...')
                    if (!this.payTransferView) {
                        this.payTransferView = new PayTransferView();
                        this.views[type] = this.payTransferView
                    }
                    this.payTransferView.start()
                    break;
                case "ViewAlert":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示提示(' + type + ') ...')
                    if (!this.viewAlert) {
                        this.viewAlert = new ViewAlert();
                        this.views[type] = this.viewAlert
                    }
                    this.viewAlert.start()
                    break;
                case "ViewConfirm":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示确认(' + type + ') ...')
                    if (!this.viewConfirm) {
                        this.viewConfirm = new ViewConfirm();
                        this.views[type] = this.viewConfirm
                    }
                    this.viewConfirm.start()
                    break;
                case "ViewToast":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示Toast(' + type + ') ...')
                    if (!this.viewToast) {
                        this.viewToast = new ViewToast();
                    }
                    this.viewToast.start()
                    break;
                case "ViewLoading":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示Loading(' + type + ') ...')
                    if (!this.viewLoading) {
                        this.viewLoading = new ViewLoading();
                        this.views[type] = this.viewLoading
                    }
                    this.viewLoading.start()
                    break;
                case "ViewTransConfirmGas":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示Gas转账确认(' + type + ') ...')
                    if (!this.viewTransConfirmGas) {
                        this.viewTransConfirmGas = new ViewTransConfirmGas();
                        this.views[type] = this.viewTransConfirmGas
                    }
                    this.viewTransConfirmGas.start()
                    break;
                case "RegisterView":
                    console.log('[Bla Cat]', '[ViewMgr]', '注册(' + type + ') ...')
                    if (!this.registerView) {
                        this.registerView = new RegisterView()
                        this.views[type] = this.registerView
                    }
                    this.registerView.start()
                    break;
                case "ForgetPasswordView":
                    console.log('[Bla Cat]', '[ViewMgr]', '忘记密码(' + type + ') ...')
                    if (!this.forgetPasswordView) {
                        this.forgetPasswordView = new ForgetPasswordView()
                        this.forgetPasswordView[type] = this.forgetPasswordView
                    }
                    this.forgetPasswordView.start()
                    break;
                    
                case "ModifyNameView":
                    console.log('[Bla Cat]', '[ViewMgr]', '显示修改昵称(' + type + ') ...')
                    if (!this.modifyNameView) {
                        this.modifyNameView = new ModifyNameView()
                        this.views[type] = this.modifyNameView
                    }
                    this.modifyNameView.start()
                    break;

            }
        }


        removeAll() {
            // console.log(Main.viewMgr.mainView.div.childNodes)

            for (let className in this.views) {
                let v = this.views[className];

                console.log('[Bla Cat]', '[ViewMgr]', 'removeAll, view => ', v)

                switch (className) {
                    case "ViewConfirm":
                        if (Main.user.info.uid) {
                            v.remove()
                        }
                        break;
                    default:
                        if (v.isCreated) {
                            v.remove()
                        }
                        break;
                }
            }
        }
        // 更新视图
        update() {
            console.log('[Bla Cat]', '[ViewMgr]', 'update ...')

            for (let className in this.views) {
                let v = this.views[className];

                switch (className) {
                    case "PayView":
                        if (v.isCreated) {
                            // console.log('[Bla Cat]', '[ViewMgr]', 'update, view => ', v)
                            // var isHidden = v.isHidden();
                            // v.WalletListsHashString = null;
                            // v.WalletListsNeedConfirm = false
                            v.update()
                            // if (isHidden) v.hidden()
                        }
                        break;
                    default:
                        if (v.isCreated && !v.isHidden()) {
                            // console.log('[Bla Cat]', '[ViewMgr]', 'update, view => ', v)
                            v.update()
                        }
                        break;
                }
            }
        }
    }
}