<template>
  <div id="clazz">
    <el-link @click="dialogFormVisible = true" type="primary">添加班级</el-link>
    <el-table :data="clazzs" border>
      <el-table-column prop="id" label="ID" width="150"> </el-table-column>
      <el-table-column prop="clazz_name" label="班级" width="120">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="removeClazz(scope.row.id)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加班级信息" :visible.sync="dialogFormVisible">
      <el-form :model="clazz_form">
        <el-form-item label="班级名称" :label-width="formLabelWidth">
          <el-input
            v-model="clazz_form.clazz_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add_clazz">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      clazz_form: {
        clazz_name: ''
      },
      formLabelWidth: '120px'
    }
  },
  created(){
    this.$store.dispatch('getAllClazz');
  },
  computed: {
    clazzs() {
      return this.$store.state.clazzs
    }
  },
  methods: {
    add_clazz() {
      // console.log(this.clazz_form);
      this.dialogFormVisible = false;
      this.$store.dispatch('add_clazz',this.clazz_form.clazz_name)
    },
    removeClazz(id) {
       this.$confirm('确定删除？')
          .then(() => {
        this.$store.dispatch('remove_clazz',id);
          })
          .catch(() => {});
    }
  }
}
</script>

<style lang="less" scoped>
#id {
  text-align: left;
}
/deep/.el-input{
  width: 200px;
}
/deep/.el-dialog{
  width: 400px;
}
</style>