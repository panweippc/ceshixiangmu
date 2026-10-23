// 本地示例数据（无后端，纯前端演示用）
// 如需协作修改数据，直接编辑本文件对应数组即可。

const DORM_DATA = [
  { building: "1号楼", room: "101", beds: 4, occupied: 4, manager: "王芳" },
  { building: "1号楼", room: "102", beds: 4, occupied: 3, manager: "王芳" },
  { building: "2号楼", room: "201", beds: 6, occupied: 5, manager: "李强" },
  { building: "2号楼", room: "202", beds: 6, occupied: 6, manager: "李强" },
  { building: "3号楼", room: "301", beds: 4, occupied: 2, manager: "赵敏" },
  { building: "3号楼", room: "302", beds: 4, occupied: 4, manager: "赵敏" },
];

const STUDENT_DATA = [
  { id: "20230101", name: "陈晓", gender: "男", dorm: "1号楼 101", phone: "13800000001" },
  { id: "20230102", name: "刘洋", gender: "男", dorm: "1号楼 101", phone: "13800000002" },
  { id: "20230103", name: "周婷", gender: "女", dorm: "1号楼 102", phone: "13800000003" },
  { id: "20230104", name: "吴磊", gender: "男", dorm: "2号楼 201", phone: "13800000004" },
  { id: "20230105", name: "郑爽", gender: "女", dorm: "2号楼 202", phone: "13800000005" },
  { id: "20230106", name: "孙浩", gender: "男", dorm: "3号楼 301", phone: "13800000006" },
  { id: "20230107", name: "林静", gender: "女", dorm: "3号楼 302", phone: "13800000007" },
];

const MATERIAL_DATA = [
  { name: "双层床", category: "家具", count: 24, location: "各宿舍房间", status: "在用" },
  { name: "书桌", category: "家具", count: 26, location: "各宿舍房间", status: "在用" },
  { name: "空调", category: "电器", count: 12, location: "各宿舍房间", status: "在用" },
  { name: "热水器", category: "电器", count: 12, location: "各宿舍房间", status: "待维修" },
  { name: "灭火器", category: "消防", count: 18, location: "楼道公共区", status: "在用" },
  { name: "扫把拖把", category: "清洁", count: 30, location: "各楼层保洁间", status: "在用" },
  { name: "维修工具箱", category: "维修", count: 4, location: "宿管值班室", status: "闲置" },
];

const TIMELINE_DATA = [
  { time: "2026-10-23 09:12", text: "3号楼 301 新增入住 1 人" },
  { time: "2026-10-22 16:40", text: "2号楼 202 报修：水管漏水，已处理" },
  { time: "2026-10-21 14:05", text: "1号楼 102 退宿 1 人，空出 1 床位" },
  { time: "2026-10-20 10:30", text: "系统完成本月入住数据核对" },
];
