<template>
  <div id="clazz">
    <el-link @click="dialogFormVisible = true" type="primary">添加学生</el-link>
    <el-table :data="students" border>
      <el-table-column fixed prop="id" label="ID" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="clazz.clazz_name" label="班级" width="120">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="remove_stu(scope.row.id)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加学生信息" :visible.sync="dialogFormVisible">
      <el-form :model="stu_form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="stu_form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-select v-model="stu_form.clazz_id" placeholder="请选择班级">
            <el-option
              v-for="clazz in clazzs"
              :key="clazz.id"
              :label="clazz.clazz_name"
              :value="clazz.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add_stu"
          >确 定</el-button
        >
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
      formLabelWidth: '60px',
      stu_form: {
        name: '',
        clazz_id: ''
      }
    }
  },
  methods: {
    add_stu() {
      this.dialogFormVisible = false;
      //  console.log(this.stu_form);
      this.$store.dispatch('add_student', this.stu_form)
      this.stu_form.name=''
      this.stu_form.clazz_id=''
    },
    remove_stu(id) {
      this.$confirm('确定删除？')
          .then(() => {
         this.$store.dispatch('remove_student', id)
          })
          .catch(() => {});
    }
  },
  created(){
    this.$store.dispatch('getAllClazz');
    this.$store.dispatch('getAllstu');
  },

  computed: {
    clazzs() {
      return this.$store.state.clazzs
    },
    students() {
      return this.$store.state.students
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