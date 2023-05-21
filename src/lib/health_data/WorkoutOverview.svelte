<script>
    import { getWorkoutData } from "$lib/classes/workouts";
    import { getCountOfWorkouts } from "$lib/classes/workouts";
    
    import { Engine, functionCreateDatatable, Pagination, RowsPerPage, Search, Sort } from 'svelte-datatables-net';

    let workouts = getWorkoutData();
    let workoutCount = getCountOfWorkouts();

    let objectDatatable = functionCreateDatatable({
        parData: workouts,
        parSearchableColumns: ['date', 'type'],
        parRowsPerPage: '5',
        parSearchString: '',
        parSortBy: 'date',
        parSortOrder: 'ascending'
    });
</script>

<Engine bind:propDatatable={objectDatatable} />

<div id="workouts" class="card-body">
    <div class="table-responsive">
        
        <div  id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row align-items-center mb-2">
                <div class="col-12 col-md-6 text-md-start text-center mb-1 mb-md-0">
                    <div class="d-md-flex align-items-md-center">
                        <span class="me-1">Search:</span>
                        <Search 
                            bind:propDatatable={objectDatatable} 
                            propPlaceholder="Type here..." 
                            class="form-control form-control-sm"
                        />
                    </div>
                </div>
                <div class="col-12 col-md-6 text-md-end text-center">
                    <RowsPerPage
                        bind:propDatatable={objectDatatable}
                        class="d-inline form-select form-select-sm w-auto"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="all">ALL</option>
                    </RowsPerPage>
                    <span>RESULTS PER PAGE</span>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                        <thead>
                            <tr role="row">
                                <th rowspan="1" colspan="1"><Sort bind:propDatatable={objectDatatable} propColumn={'date'}>Date</Sort></th>
                                <th rowspan="1" colspan="1"><Sort bind:propDatatable={objectDatatable} propColumn={'type'}>Type</Sort></th>
                                <th rowspan="1" colspan="1">Duration</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr><th rowspan="1" colspan="1">Date</th><th rowspan="1" colspan="1">Type</th><th rowspan="1" colspan="1">Duration</th></tr>
                        </tfoot>
                        <tbody>
                            {#each objectDatatable.arrayData as row}
                                <tr class="odd">
                                    <td class="sorting_1">{row.date}</td>
                                    <td>{row.type}</td>
                                    <td>{row.duration}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of {workoutCount} entries
                    </div>
                </div>
                <div class="col-sm-12 col-md-7">
                    <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                        <Pagination bind:propDatatable={objectDatatable} propSize="small" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>