export default {
	"config": {
		"api": {
			"list": "/api/user/list",
			"inset": "/api/user/inset",
			"change": "/api/user/change",
			"deleteData": "/api/user/change"
		},
		"size": "mini",
		"pagination": true
	},
	"keys": {
		"name": {
			"type": "string",
			"label": "名称",
			"required": true,
			"placeholder": "请输入名称"
		},
		"sex": {
			"type": "select",
			"label": "性别",
			"required": true,
			"placeholder": "请选择性别",
			"select": [
				{ "label": "男", "value": 1 },
				{ "label": "女", "value": 2 }
			]
		},
		"time": {
			"type": "time",
			"hiddenSearch": true,
			"label": "时间",
			"required": true,
			"valueFormat": "yyyy-MM-dd HH:mm:ss",
			"placeholder": "请选择时间"
		},
		"remark": {
			"type": "string",
			"label": "备注",
			"placeholder": "请输入备注"
		},
		"startEndTime": {
			"type": "frameTime",
			"keys": ["startTime", "endTime"],
			"label": "时间",
			"valueFormat": "yyyy-MM-dd HH:mm:ss",
			"placeholder": "请选择时间"
		}
	}
}
