async function editFormHandler(event) {
  // console.log("Clicked")
    event.preventDefault();
    // const editId = document.querySelector('#editId').value;
    const name = document.querySelector('#nameid').value;
    const author = document.querySelector('#authorid').value;
    const instructions = document.querySelector('#instructionsid').value;
    const ingredients = document.querySelector('#ingredientsid').value;
    const category_id = document.querySelector('#categoryid').value;
    const style_id = document.querySelector('#styleid').value;
    // console.log(category_id)
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    // What part of our application will handle this 'put' request?
    // The Controller will handle this 'put' request.
    console.log("here 2")
    const response = await fetch(`/api/recipes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        author,
        instructions,
        ingredients,
        category_id,
        style_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("here 3")
    if (response.ok) {
      document.location.replace(`/recipes/${id}`);
    } else {
      alert('Failed to edit recipe');
    }
  }
  
  document
    .querySelector('.edit-recipe-form')
    ?.addEventListener('submit', editFormHandler);
  
