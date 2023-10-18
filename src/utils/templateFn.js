
export default (children) => {
    let html = `
    <template>
      <div class="template">
      ${children}
      </div>
    </template>
    <script setup lang="ts">
        import { ref } from "vue";
        import axios from "axios";
        let loading = ref(false); 
        const form = ref({ 
          pageNum: 1,
          pageSize: 10,
          total: 0,
        });
        const tableData = ref();
        const getList = () => { 
            loading.value = true;
            axios
            .get("sign-document-info/limit", {
                params: form.value,
            })
            .then((res) => {
                loading.value = false;
                if (res.data.code === 200) {
                form.value.pageNum = res.data.data.pageNum;
                form.value.pageSize = res.data.data.pageSize;
                form.value.total = res.data.data.total;
                tableData.value = res.data.data.list;
                } else {
                ElMessage.error(res.data.msg);
                }
            });
        };
        getList();
    </script>
    `
    return html
}