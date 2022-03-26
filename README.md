## 路由的基本使用
  1. 明确好界面的导航区、展示区
  2. 导航区的a标签为Link标签
    <Link to="/xxx">xxx</Link>
  3. 展示区写Route标签进行路径的匹配
    <Route path="/xxx" component={Xxx}>
  4. <App/>最外则包裹了一个<BrowserRouter> 或 <HashRouter>

## 路由组件与一般组件
  1. 写法不同：
    一般组件 <Demo/>
    路由组件：<Route path="/demo" conponent={Demo}>
  2. 存放位置不同：
    一般组件：components
    路由组件: pages
  3. 接收到的`props`不同
    一般组件：写组件标签传什么，就能接收什么
    路由组件：接收到三个固定的属性
          history:
            go: ƒ go(n)
            goBack: ƒ goBack()
            goForward: ƒ goForward()
            push: ƒ push(path, state)
            replace: ƒ replace(path, state)
          location:
            pathname: "/home"
            search: ""
            state: null
          match:
            params: {}
            path: "/home"
            url: "/home"

## NavLink
  1. NavLink可以实现路由连接的高亮，通过activeClassName指定样式类名，默认为active
  2. 标签体内容是一个特殊的标签属性
  3. 通过 this.props.children 可以获取标签体内容

## Switch
  1. 通常情况下，path和component是一一对应的关系
  2. Switch可以提高路由匹配效率（单一匹配）

## 解决多极路由刷新页面样式的问题
  1. pubic/index.html 中 引入样式时不写 ./ 写 / (常用)
  2. pubic/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% (常用)
  3. 使用HashRouter

## 路由的严格匹配与模糊匹配
  1. 默认使用模糊匹配（【输入路径】必须包含要【匹配的路径】且顺序要一致）
  2. 开启严格匹配，<Route exact={true} path="/about" component={About}>
  3. 严格匹配不要随便开启，需要的时候再开，有些时候开启会导致无法继续匹配二级路由

## Redirect
  1. 重定向 <Redirect to="/xxx"/>

## 嵌套路由
  1. 注册子路由时要写上父路由的path值
  2. 路由的匹配时按照注册路由的顺序进行的

## 向路由组件传递参数
  1. params参数：
    * 路由连接（携带参数）：<Link to="/demo/test/tom/12">详情</Link>
    * 注册路由（声明接收）：<Route path="/demo/test/:name/:age" component={Test} />
    * 接收参数：const {name, age} = this.props.match.params

  2. search参数：
    * 路由连接（携带参数）：<Link to="/demo/test?name=tom&age=12">详情</Link>
    * 注册路由（无需声明接收，正常注册即可）：<Route path="/demo/test" component={Test}/>
    * 接收参数：const {name, age} = rhis.props.location /* urlencoded 编码字符串 */ 

  3. state参数：
    * 路由连接（携带参数）：<Link to={{pathname: '/demo/test', state: {name: 'tom', age: 12}}}>详情</Link>
    * 注册路由（无需声明接收，正常注册即可）：<Route path="/demo/test" component={Test}/>
    * 接收参数：const {name, age} = rhis.props.location.state