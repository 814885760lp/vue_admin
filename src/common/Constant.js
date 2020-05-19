    //自定义邮箱验证规则
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regEmail.test(value)) {
        // 合法的邮箱
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    //自定义手机号验证规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };


    export const addFormRules = {
      username: [{
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        },
        {
          min: 3,
          max: 10,
          message: "长度在 3 到 10 个字符",
          trigger: "blur"
        }
      ],
      password: [{
          required: true,
          message: "请输入密码",
          trigger: "blur"
        },
        {
          min: 6,
          max: 15,
          message: "长度在 6 到 15 个字符",
          trigger: "blur"
        }
      ],
      email: [{
          required: true,
          message: "请输入邮箱",
          trigger: "blur"
        },
        {
          min: 6,
          max: 15,
          message: "长度在 6 到 15 个字符",
          trigger: "blur"
        },
        {
          validator: checkEmail
        }
      ],
      mobile: [{
          required: true,
          message: "请输入邮箱",
          trigger: "blur"
        },
        {
          min: 6,
          max: 15,
          message: "长度在 6 到 15 个字符",
          trigger: "blur"
        },
        {
          validator: checkMobile
        }
      ]
    }