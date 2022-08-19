<template>
    <div>
        <dashboard-title title="Posts" />
        <div class="">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Blog Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DashboardTitle from '@/components/Utils/dashboardTitle';

export default {
    components: { DashboardTitle },
    data() {
        return {

        }
    }, methods: {

    }
}
</script>

<style>
</style>