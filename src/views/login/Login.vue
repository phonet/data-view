<script>
import { Field, Image, Button } from 'vant';

export default {
    name: 'Login',
    components: {
        [Field.name]: Field,
        [Image.name]: Image,
        [Button.name]: Button,
    },
    props: {},
    data() {
        return {
            passwordType: 'password',
            loding: false,
            sendData: {
                username: '',
                password: '',
                code: '',
            },
        };
    },

    methods: {
        passwordEye() {
            this.passwordType =
                this.passwordType === 'password' ? 'eye' : 'password';
        },

        refreshCode() {
            console.log('刷新验证码');
        },
        handlerSubmit() {
            console.log(this.sendData);
            this.loding = true;
            setTimeout(() => {
                sessionStorage.setItem('user', JSON.stringify(this.sendData));
                //登录成功后跳转到退出之前的页面
                let redirect = decodeURIComponent(
                    this.$route.query.redirect || '/'
                );
                this.$router.replace({ path: redirect });
                this.loding = false;
            }, 2000);
        },
    },
    computed: {
        //控制提交按钮是否可用
        submitDisabled() {
            if (
                this.sendData.username.trim() &&
                this.sendData.password.trim() &&
                this.sendData.code.trim() &&
                !this.loding
            ) {
                return false;
            }
            return true;
        },
    },
};
</script>

<template>
    <div class="login-page">
        <div class="logo-wrap">
            <van-image
                width="90"
                height="90"
                :src="require('../../assets/logo@2x.png')"
            />
        </div>
        <div class="form-wrap">
            <van-field
                v-model="sendData.username"
                placeholder="请输入账号"
                class="input-item"
                :clearable="true"
                clear-trigger="always"
            />
            <van-field
                v-model="sendData.password"
                placeholder="请输入密码"
                class="input-item"
                :type="passwordType"
                @click-right-icon="passwordEye"
            >
                <template #right-icon>
                    <van-image
                        width="17"
                        :height="passwordType === 'password' ? 8 : 12"
                        :src="
                            require(`../../assets/${
                                passwordType === 'password' ? 'password' : 'eye'
                            }.svg`)
                        "
                    />
                </template>
            </van-field>
            <van-field
                v-model="sendData.code"
                placeholder="请输入验证码"
                class="input-item"
                right-icon="warning-o"
                @click-right-icon="refreshCode"
            >
                <template #right-icon>
                    <van-image
                        width="100"
                        height="44"
                        :src="
                            'data:image/jpg;base64,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'
                        "
                    />
                </template>
            </van-field>
            <van-button
                type="primary"
                :color="submitDisabled ? '#212F5D' : '#00B5FF'"
                :class="submitDisabled ? 'disabled' : ''"
                :disabled="submitDisabled"
                :loading="loding"
                :loading-text="loding ? '登录中...' : ''"
                @click="handlerSubmit"
                >登录</van-button
            >
        </div>
    </div>
</template>

<style lang="less">
.login-page {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
}
.logo-wrap {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-wrap {
    margin: 0 40px;
    .input-item {
        border-bottom: 1px solid #313861;
        padding: 8px 0 8px 8px;
        margin-bottom: 16px;
        &:nth-child(2) {
            margin-bottom: 0;
        }
        //验证码样式控制
        &:nth-child(3) {
            padding: 6px 0 6px 8px;
            .van-field__body {
                align-items: flex-end;
            }
            img {
                border-radius: 2px;
            }
        }
        input {
            // color: #6871a6;
            font-size: 14px;
            &::placeholder {
                color: #6871a6;
            }
        }
        .van-field__right-icon {
            display: flex;
        }
    }
    .van-icon-clear {
        color: #aeb6e6;
    }
    .van-button {
        width: 100%;
        &.disabled {
            opacity: 1;
            .van-button__text {
                opacity: 0.5;
            }
        }
        .van-button__text {
            font-size: 18px;
        }
    }
}
</style>
