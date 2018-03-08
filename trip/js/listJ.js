var options = {
	valueNames: ['name', 'category']
};

var hackerList1 = new List('hacker-list1', options);

$('.filter-food1').click(function() {
  hackerList1.filter(function(item) {
    if (item.values().category == "美食") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-shopping1').click(function() {
  hackerList1.filter(function(item) {
    if (item.values().category == "购物") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-attraction1').click(function() {
  hackerList1.filter(function(item) {
    if (item.values().category == "景点") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-performance1').click(function() {
  hackerList1.filter(function(item) {
    if (item.values().category == "表演") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-beauty1').click(function() {
  hackerList1.filter(function(item) {
    if (item.values().category == "美容") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-stay1').click(function() {
  hackerList1.filter(function(item) {
    if (item.values().category == "住宿") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-none1').click(function() {
  hackerList1.filter();
  return false;
});



var options = {
	valueNames: ['name', 'category']
};

var hackerList2 = new List('hacker-list-2', options);

$('.filter-attraction2').click(function() {
  hackerList2.filter(function(item) {
    if (item.values().category == "attraction") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-food2').click(function() {
  hackerList2.filter(function(item) {
    if (item.values().category == "food") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-performance2').click(function() {
  hackerList2.filter(function(item) {
    if (item.values().category == "performance") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-shopping2').click(function() {
  hackerList2.filter(function(item) {
    if (item.values().category == "shopping") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-none2').click(function() {
  hackerList2.filter();
  return false;
});



var options = {
	valueNames: ['name', 'category']
};

var hackerList3 = new List('hacker-list-3', options);

$('.filter-attraction3').click(function() {
  hackerList3.filter(function(item) {
    if (item.values().category == "attraction") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-food3').click(function() {
  hackerList3.filter(function(item) {
    if (item.values().category == "food") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-performance3').click(function() {
  hackerList3.filter(function(item) {
    if (item.values().category == "performance") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-shopping3').click(function() {
  hackerList3.filter(function(item) {
    if (item.values().category == "shopping") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-none3').click(function() {
  hackerList3.filter();
  return false;
});



var options = {
	valueNames: ['name', 'category']
};

var hackerList4 = new List('hacker-list-4', options);

$('.filter-attraction4').click(function() {
  hackerList4.filter(function(item) {
    if (item.values().category == "attraction") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-food4').click(function() {
  hackerList4.filter(function(item) {
    if (item.values().category == "food") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-performance4').click(function() {
  hackerList4.filter(function(item) {
    if (item.values().category == "performance") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-shopping4').click(function() {
  hackerList4.filter(function(item) {
    if (item.values().category == "shopping") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-none4').click(function() {
  hackerList4.filter();
  return false;
});