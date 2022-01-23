<template>
      <div class="container rounded-2 p-4 my-4">
        <div class="row">
          <div class="col-md-8">
            <label class="px-1">
              Search By release Date
            </label>
            from:
               <input type="date" name="" id="fromRelease" class="form-control">
            To:   
               <input type="date" name="" id="ToRelase" class="form-control">
          </div>
          <div class="col-md-4">
           <input type="button" value="Search">
          </div>
        </div>
      </div>
</template>


<style>
  .container{
    background: #f4f4f4 !important;
    box-shadow: 1px 1px 3px #9c9c9cdd !important;;
  }
  input[type=date]{
    width: 30%;
    display: inline-block;
  }
  input[type=date]:focus{
    border-color: #fff;
    outline: 0;
    box-shadow: 0 0 0 0.25rem #7186ae;
  }
  input[type=button]{
    border: 3px solid #2a406a !important;
    border-radius: 10px;
    width: 30%;
    height: 38px;
    background: #4e6184;
    color: #ffff;
  }
  input[type=button]:hover{
    opacity: 0.7 ;
    box-shadow: 1px 1px 3px #9c9c9cdd;

  }
  .card{
    min-height: 24%;
  }
  .card-body .card-title a{
    font-size: 20px;
    text-decoration: none;
    color: #393939;
  }
  .card-title {
    margin-bottom: 0.5rem;
    width: 100%;
    overflow: hidden;
  }
  .card-body .card-title a {
    white-space: nowrap;
  }

</style>



