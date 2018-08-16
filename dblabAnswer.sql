9.
select od.ProductID, c.CustomerID, sum(od.Quantity) as Quantity
from orderdetail as od, `order` as o, customer as c
where od.OrderID = o.OrderID
    and o.CustomerID = c.CustomerID
group by od.ProductID, c.CustomerID
having Quantity >= all(
    select sum(od.Quantity) as Quantity
    from orderdetail as od, `order` as o, customer as c
    where od.OrderID = o.OrderID
        and o.CustomerID = c.CustomerID
    group by od.ProductID, c.CustomerID
);

10.
select result.City, max(result.sum_of_product)
from (select c.City, sum(od.Quantity) as sum_of_product
from orderdetail as od, `order` as o, customer as c
where od.OrderID = o.OrderID
    and o.CustomerID = c.CustomerID
group by c.City
order by sum_of_product desc) as result;

11.
select result.City, max(result.sum_of_money)
from (select c.City, sum(od.Quantity * p.UnitPrice) as sum_of_money
from orderdetail as od, `order` as o, customer as c, product as p
where od.OrderID = o.OrderID
    and o.CustomerID = c.CustomerID
    and p.ProductID = od.ProductID
group by c.City
order by sum_of_money desc) as result;


12.
select concat(FirstName, ' ', LastName, ' : ', substr(Phone, length(Phone) - 3, 3)) as infor
from customer;


13.
select r.CategoryName, max(r.sumOfQuantity)
from (
    select c.CategoryName, sum(od.Quantity) as sumOfQuantity
    from category as c, product as p, orderdetail as od
    where c.CategoryID = p.CategoryID
        and p.ProductID = od.ProductID
    group by c.CategoryID
    order by sumOfQuantity desc    
) as r;


14.
select od.OrderID, od.ProductID, result.cost
from orderdetail as od, product as p ,(
    select o.OrderID, sum(od.Quantity * p.UnitPrice) as cost
    from product as p, `order` as o, orderdetail as od
    where o.OrderID = od.OrderID
        and od.ProductID = p.ProductID
    group by o.OrderID    
) as result
where od.OrderID  = result.OrderID
    and p.ProductID = od.ProductID
    and p.UnitPrice * od.Quantity = result.cost/2;
    

1.

select DATE_FORMAT(DATE_ADD(cal.calDate, INTERVAL -5 MONTH), "%y/%m") as orderDateStart,DATE_FORMAT(cal.calDate,"%y/%m") as orderDateEnd, sum(p.UnitPrice * od.Quantity) as sumOfSale
from product as p, orderdetail as od, (
    SELECT OrderID,
    CASE
        WHEN month(OrderDate) = 1 or month(OrderDate) = 7 THEN DATE_ADD(OrderDate, INTERVAL 5 MONTH)
        WHEN month(OrderDate) = 2 or month(OrderDate) = 8 THEN DATE_ADD(OrderDate, INTERVAL 4 MONTH)
        WHEN month(OrderDate) = 3 or month(OrderDate) = 9 THEN DATE_ADD(OrderDate, INTERVAL 3 MONTH)
        WHEN month(OrderDate) = 4 or month(OrderDate) = 10 THEN DATE_ADD(OrderDate, INTERVAL 2 MONTH)
        WHEN month(OrderDate) = 5 or month(OrderDate) = 11 THEN DATE_ADD(OrderDate, INTERVAL 1 MONTH)
        ELSE OrderDate
    END as calDate
    FROM `order`
) as cal
where cal.OrderID = od.OrderID
    and od.ProductID = p.ProductID
group by orderDateEnd;

15.
select r.SupplierID, count(*) as num_of_month
from (
    select re.SupplierID, re.month, max(re.sum_of_sale) as sum_of_sale
    from (
        select p.SupplierID, DATE_FORMAT(o.OrderDate, "%m/%y") as month, sum(p.UnitPrice * od.Quantity) as sum_of_sale
        from product as p, orderdetail as od, `order` as o
        where o.OrderID = od.OrderID
            and od.ProductID = p.ProductID
        group by month
    ) as re
    group by re.month, re.SupplierID
) as r
group by r.SupplierID
having count(*) >= all (
    select count(*)
    from (
        select re.SupplierID, re.month, max(re.sum_of_sale) as sum_of_sale
        from (
            select p.SupplierID, DATE_FORMAT(o.OrderDate, "%m/%y") as month, sum(p.UnitPrice * od.Quantity) as sum_of_sale
            from product as p, orderdetail as od, `order` as o
            where o.OrderID = od.OrderID
                and od.ProductID = p.ProductID
            group by month
        ) as re
        group by re.month, re.SupplierID
    ) as r
    group by r.SupplierID
);

    
17.
select c.CategoryName, count(p.SupplierID) as num
from category as c, product as p
where c.CategoryID = p.CategoryID
group by c.CategoryID
having num >= all(
    select count(p.SupplierID) as num
    from category as c, product as p
    where c.CategoryID = p.CategoryID
    group by c.CategoryID
);

select c.CategoryName, count(p.SupplierID) as num
from category as c
join product as p on c.CategoryID = p.CategoryID
group by c.CategoryID
having num >= all(
    select count(p.SupplierID) as num
    from category as c
    join product as p on c.CategoryID = p.CategoryID
    group by c.CategoryID
);