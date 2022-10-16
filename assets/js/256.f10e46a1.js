(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{609:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sqlalchemy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlalchemy"}},[t._v("#")]),t._v(" SQLAlchemy")]),t._v(" "),s("blockquote",[s("p",[t._v("我该如何在 Sanic 中集成 SQLAlchemy ？")])]),t._v(" "),s("p",[t._v("Sanic 可以与所有的 ORM 工具一起使用，但是非异步的 ORM 框架将会拖累 Sanic 的性能。在 "),s("a",{attrs:{href:"https://docs.sqlalchemy.org/en/14/changelog/changelog_14.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQLAlchemy 1.4"),s("OutboundLink")],1),t._v(" 版本中，添加了对 asyncio 的原生支持，至此，Sanic 终于可以和 ORM 界的老前辈愉快的玩耍了。")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("定义 ORM 模型。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./models.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" INTEGER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ForeignKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" declarative_base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relationship\n\nBase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" declarative_base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    __abstract__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INTEGER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" primary_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BaseModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    __tablename__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cars "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" relationship"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Car"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to_dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cars"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brand"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("brand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" car "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BaseModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    __tablename__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"car"')]),t._v("\n\n    brand "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    user_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ForeignKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person.id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" relationship"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Person"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" back_populates"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cars"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("创建 Sanic app 与异步数据库引擎。")]),t._v(" "),s("blockquote",[s("p",[t._v("这里我们使用 postgresql 作为数据库，您也可以选择 MySQL，注意要将驱动从 "),s("code",[t._v("asyncpg")]),t._v(" 换为 "),s("code",[t._v("aiomysql")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./server.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncio "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_async_engine\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbind "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_async_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postgresql+asyncpg://postgres:postgres@localhost/test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("注册中间件。")]),t._v(" "),s("p",[t._v("在这里，请求中间件为我们创建了一个可用的 "),s("code",[t._v("AsyncSession")]),t._v(" 对象并且将其绑定至 "),s("code",[t._v("request.ctx")]),t._v(" 中，而 "),s("code",[t._v("_base_model_session_ctx")]),t._v(" 也会在这是被赋予可用的值，如果您需要在其他地方使用 session 对象（而非从 "),s("code",[t._v("request.ctx")]),t._v(" 中取值）,该全局变量或许能帮助您（它是线程安全的）。")]),t._v(" "),s("p",[t._v("响应中间件会将创建的 "),s("code",[t._v("AsyncSession")]),t._v(" 关闭，并重置 "),s("code",[t._v("_base_model_session_ctx")]),t._v(" 的值，进而释放资源。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./server.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" contextvars "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ContextVar \n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncio "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AsyncSession\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sessionmaker\n\n_sessionmaker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sessionmaker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AsyncSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expire_on_commit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n_base_model_session_ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ContextVar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"session"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inject_session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _sessionmaker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session_ctx_token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _base_model_session_ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("middleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close_session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"session_ctx_token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        _base_model_session_ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session_ctx_token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("注册路由。")]),t._v(" "),s("p",[t._v("根据 SQLAlchemy 的官方文档，"),s("code",[t._v("session.query")]),t._v(" 将在 2.0 版本中被淘汰，取而代之的是使用 "),s("code",[t._v("select")]),t._v(" 查询 ORM 对象。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./server.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" select\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" selectinload\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    session "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("begin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        car "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brand"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tesla"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cars"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("car"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/<pk:int>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    session "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("begin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        stmt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" select"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("where"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" pk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selectinload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scalar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("启动服务并发送请求：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--request")]),t._v(" POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:8000/user'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cars"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brand"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tesla"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--request")]),t._v(" GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:8000/user/1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cars"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brand"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tesla"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("如果您还在使用 1.3 版本的 SQLAlchemy，建议您使用 "),s("a",{attrs:{href:"https://github.com/python-gino/gino",target:"_blank",rel:"noopener noreferrer"}},[t._v("GINO"),s("OutboundLink")],1),t._v(" 。")])]),t._v(" "),s("blockquote",[s("p",[t._v("还有一些其他优秀的 ORM 框架，如拥有和 Django ORM 类似 API 的 "),s("a",{attrs:{href:"https://tortoise-orm.readthedocs.io/en/latest/examples/sanic.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tortoise-orm"),s("OutboundLink")],1),t._v(" 也可以在 Sanic 应用中使用。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);