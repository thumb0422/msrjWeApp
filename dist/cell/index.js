<<<<<<< HEAD
'use strict';

var warn = function warn(msg, getValue) {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
};

Component({
  externalClasses: ['cell-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  properties: {
    title: {
      type: String,
      description: '左侧标题'
    },
    label: {
      type: String,
      description: '标题下方的描述信息'
    },
    value: {
      type: String,
      description: '右侧内容'
    },
    onlyTapFooter: {
      type: Boolean,
      description: '只有点击 footer 区域才触发 tab 事件'
    },
    isLink: {
      type: null,
      value: '',
      description: '是否展示右侧箭头并开启尝试以 url 跳转'
    },
    linkType: {
      type: String,
      value: 'navigateTo',
      description: '链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch'
    },
    url: {
      type: String,
      value: ''
    }
  },
  data: {
    isLastCell: true
  },
  methods: {
    footerTap: function footerTap() {
      // 如果并没有设置只点击 footer 生效，那就不需要额外处理。cell 上有事件会自动处理
      if (!this.data.onlyTapFooter) {
        return;
      }

      this.triggerEvent('tap', {});
      doNavigate.call(this);
    },
    cellTap: function cellTap() {
      // 如果只点击 footer 生效，那就不需要在 cell 根节点上处理
      if (this.data.onlyTapFooter) {
        return;
      }

      this.triggerEvent('tap', {});
      doNavigate.call(this);
    },


    // 用于被 cell-group 更新，标志是否是最后一个 cell
    updateIsLastElement: function updateIsLastElement(isLastCell) {
      this.setData({ isLastCell: isLastCell });
    }
  }
});

// 处理跳转
function doNavigate() {
  var _data$url = this.data.url,
      url = _data$url === undefined ? '' : _data$url;

  var type = typeof this.data.isLink;

  if (!this.data.isLink || !url || url === 'true' || url === 'false') return;

  if (type !== 'boolean' && type !== 'string') {
    warn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
    return;
  }

  if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
    warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
    return;
  }
  wx[this.data.linkType].call(wx, { url: url });
}
=======
const warn = (msg, getValue) => {
    console.warn(msg);
    console.log('接受到的值为：', getValue);
};

Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true
    },

    relations: {
        '../cell-group/index': {
            type: 'parent'
        }
    },

    properties: {
        // 左侧标题
        title: {
            type: String
        },
        // 标题下方的描述信息
        label: {
            type: String
        },
        // 右侧内容
        value: {
            type: String
        },
        // 只有点击 footer 区域才触发 tab 事件
        onlyTapFooter: {
            type: Boolean
        },
        // 是否展示右侧箭头并开启尝试以 url 跳转
        isLink: {
            type: null,
            value: ''
        },
        // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
        linkType: {
            type: String,
            value: 'navigateTo'
        },
        url: {
            type: String,
            value: ''
        }
    },

    data: {
        isLastCell: true
    },

    methods: {
        navigateTo () {
            const { url } = this.data;
            const type = typeof this.data.isLink;

            this.triggerEvent('click', {});

            if (!this.data.isLink || !url || url === 'true' || url === 'false') return;

            if (type !== 'boolean' && type !== 'string') {
                warn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
                return;
            }

            if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
                warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
                return;
            }
            wx[this.data.linkType].call(wx, {url});
        },
        handleTap () {
            if (!this.data.onlyTapFooter) {
                this.navigateTo();
            }
        },

        updateIsLastCell (isLastCell) {
            this.setData({ isLastCell });
        }
    }
});
>>>>>>> 4f7df53d0e4b1cad4f5a13a9ac4882c3be2c29dd
